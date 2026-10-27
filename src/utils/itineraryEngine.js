import { KARNATAKA_DESTINATIONS } from '../data/destinations';

export function generateItinerary({
  interests = ['heritage'],
  pace = 'balanced',
  origin = 'Bengaluru',
  days = 5,
  travelers = 2,
  budget = 35000
}) {
  // Normalize interests tags
  const normalizedInterests = interests.map(i => i.toLowerCase());

  // Determine relevant destinations based on interests
  const scoredDestinations = KARNATAKA_DESTINATIONS.map(dest => {
    let score = 0;
    const cat = dest.category.toLowerCase();
    const tags = dest.tags.map(t => t.toLowerCase());

    if (normalizedInterests.includes('heritage') && (cat.includes('heritage') || dest.id === 'hampi' || dest.id === 'badami' || dest.id === 'mysore')) {
      score += 5;
    }
    if ((normalizedInterests.includes('mountains') || normalizedInterests.includes('nature')) && (cat.includes('mountain') || dest.id === 'coorg' || dest.id === 'chikmagalur')) {
      score += 5;
    }
    if ((normalizedInterests.includes('coast') || normalizedInterests.includes('beaches')) && (cat.includes('coast') || dest.id === 'gokarna' || dest.id === 'murudeshwara')) {
      score += 6;
    }
    if (normalizedInterests.includes('spiritual') && (tags.some(t => t.includes('temple') || t.includes('sacred')) || dest.id === 'gokarna' || dest.id === 'hampi')) {
      score += 4;
    }

    // Proximity bonus based on origin hub
    if (origin === 'Bengaluru' && (dest.id === 'mysore' || dest.id === 'coorg' || dest.id === 'chikmagalur')) score += 2;
    if (origin === 'Mysuru' && (dest.id === 'coorg' || dest.id === 'chikmagalur' || dest.id === 'kabini')) score += 3;
    if (origin === 'Mangaluru' && (dest.id === 'gokarna' || dest.id === 'coorg' || dest.id === 'murudeshwara')) score += 3;
    if (origin === 'Hubballi' && (dest.id === 'badami' || dest.id === 'hampi' || dest.id === 'gokarna')) score += 3;

    return { dest, score };
  });

  scoredDestinations.sort((a, b) => b.score - a.score);

  // Pick destinations suited for the trip duration
  const maxDestCount = days <= 3 ? 1 : days <= 5 ? 2 : days <= 7 ? 3 : 4;
  const pickedDestinations = scoredDestinations.slice(0, maxDestCount).map(s => s.dest);

  // Generate day-by-day sequence
  const generatedDays = [];
  const daysPerDest = Math.max(1, Math.floor(days / pickedDestinations.length));

  let currentDay = 1;
  let accumulatedKm = 120; // base local transit

  for (let i = 0; i < pickedDestinations.length; i++) {
    const dest = pickedDestinations[i];
    const isFirst = i === 0;
    const isLast = i === pickedDestinations.length - 1;

    // How many days for this destination?
    const spanForThis = isLast ? (days - currentDay + 1) : Math.min(daysPerDest, days - currentDay + 1);

    accumulatedKm += isFirst ? 280 : 180;

    for (let d = 0; d < spanForThis && currentDay <= days; d++) {
      if (d === 0) {
        // Arrival / Initial Exploration Day
        generatedDays.push({
          dayNumber: currentDay,
          destId: dest.id,
          destinationName: dest.name,
          kannadaName: dest.kannadaName,
          region: dest.region,
          title: isFirst ? `Depart ${origin} & Arrive at ${dest.name}` : `Scenic Drive to ${dest.name} & Evening Exploration`,
          location: `${dest.name} (${dest.region})`,
          transitInfo: isFirst ? `Drive from ${origin}` : `Inter-circuit transit`,
          morningActivity: isFirst 
            ? `Early morning start from ${origin}. Enjoy highway breakfast stop for piping hot Davangere Benne Dosa or Thatte Idli.`
            : `Gentle morning departure, driving through coconut palm groves and scenic Karnataka countryside.`,
          afternoonActivity: `Arrive and check in at ${dest.name}. Savor authentic local Karnataka lunch, followed by an afternoon visit to ${dest.highlights[0]?.title || 'the main historical complex'}.`,
          eveningActivity: `Sunset viewing at ${dest.highlights[1]?.title || 'scenic vantage point'}. Watch the sky glow golden over ancient stone and hills.`,
          foodRecommendation: dest.cuisine[0] ? `${dest.cuisine[0].name} — ${dest.cuisine[0].desc}` : "Traditional South Karnataka thali with ghee and sambar",
          tip: "Slip-on walking shoes are recommended as shoes must be removed before entering active temple sanctums."
        });
      } else if (d === 1) {
        // Full Day Deep-Dive
        generatedDays.push({
          dayNumber: currentDay,
          destId: dest.id,
          destinationName: dest.name,
          kannadaName: dest.kannadaName,
          region: dest.region,
          title: `Immersive Heritage & Sacred Wonders of ${dest.name}`,
          location: `${dest.name}`,
          transitInfo: "Local heritage walking circuits",
          morningActivity: `Sunrise expedition to ${dest.highlights[1]?.title || dest.highlights[0]?.title}. Experience the cool morning serenity and magnificent morning light.`,
          afternoonActivity: `Explore ${dest.highlights[2]?.title || dest.highlights[0]?.title}. Discover artisan handicraft workshops and historical inscriptions.`,
          eveningActivity: `Evening stroll through local bazaars. Enjoy fresh filter coffee in brass dabarah and explore local sweet shops.`,
          foodRecommendation: dest.cuisine[1] ? `${dest.cuisine[1].name} — ${dest.cuisine[1].desc}` : "Regional spiced delicacies & fresh coconut chutney",
          tip: "Early morning (6:30 AM - 9:00 AM) and dusk (4:30 PM - 6:30 PM) offer the most comfortable temperatures and best photos."
        });
      } else {
        // Nature / Hidden Trails / Relaxation Day
        generatedDays.push({
          dayNumber: currentDay,
          destId: dest.id,
          destinationName: dest.name,
          kannadaName: dest.kannadaName,
          region: dest.region,
          title: `Secret Viewpoints & Cultural Immersion in ${dest.name}`,
          location: `${dest.name}`,
          transitInfo: "Off-the-beaten-track excursion",
          morningActivity: `Excursion to ${dest.highlights[3]?.title || 'hidden sacred waterfalls and cliff trails'}. Relish an organic plantation breakfast.`,
          afternoonActivity: `Hands-on heritage craft session or peaceful lakeside contemplation. Learn the folklore from resident elders.`,
          eveningActivity: `Twilight musical prayers or seaside sunset reflections. Relax over a leisurely coastal or Malnad dinner.`,
          foodRecommendation: dest.cuisine[2]?.name || dest.cuisine[0]?.name || "Traditional Karnataka sweet treat",
          tip: "Carry a lightweight reusable water bottle and respect local temple customs and sacred groves (Devara Kadu)."
        });
      }
      currentDay++;
    }
  }

  // Cost estimates
  const perPerson = Math.round(budget / Math.max(1, travelers));

  return {
    title: `${pickedDestinations.map(d => d.name.split(' ')[0]).join(' → ')} Expedition`,
    origin,
    daysCount: days,
    estimatedKm: accumulatedKm,
    perPersonBudget: perPerson,
    totalBudget: budget,
    summary: `A personalized ${days}-day expedition starting from ${origin}, carefully balancing ${pickedDestinations.map(d => d.name).join(' and ')}.`,
    days: generatedDays,
    featuredDestinations: pickedDestinations
  };
}
