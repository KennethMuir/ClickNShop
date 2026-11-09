import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function main() {
  // Seed categories
  const categories = [
    "FASHION_AND_APParel",
    "ELECTRONICS_AND_TECHNOLOGY",
    "SOFTWARE_AND_BUSINESS",
    "MOBILE_AND_CONNECTIVITY",
    "TRAVEL_AND_TRANSPORT",
    "PETS_AND_ANIMALS",
    "HEALTH_AND_WELLNESS",
    "ENTERTAINMENT_AND_GIFTS",
    "HOME_AND_LIFESTYLE",
  ]

  for (const cat of categories) {
    await db.category.create({
      data: { name: cat, slug: cat.toLowerCase().replace(/[_\s]+/g, "-") },
    })
  }

  // Seed affiliate networks
  await db.affiliateNetwork.create({
    data: {
      name: "YAZING",
      baseUrl: "https://yazing.com",
    },
  })

  // Seed the 38 affiliate destinations
  const destinations = [
    // FASHION AND APPAREL
    { networkSlug: "yazing", merchantSlug: "fansedge", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "outfitrer", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "prana", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "shein", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "zolucky", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "zulily", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "athleta", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "barefootdreams", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "columbia", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "cosabella", category: "FASHION_AND_APParel", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "fitory", category: "FASHION_AND_APParel", username: "KennethMuiruri" },

    // ELECTRONICS AND TECHNOLOGY
    { networkSlug: "yazing", merchantSlug: "abt", category: "ELECTRONICS_AND_TECHNOLOGY", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "fanttik", category: "ELECTRONICS_AND_TECHNOLOGY", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "firemaplegear", category: "ELECTRONICS_AND_TECHNOLOGY", username: "KennethMuiruri" },

    // SOFTWARE AND BUSINESS
    { networkSlug: "yazing", merchantSlug: "hostgator", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "onlinecheckwriter", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "joinhomebase", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "biltrx", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "cyberghostvpn", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "fastestvpn", category: "SOFTWARE_AND_BUSINESS", username: "KennethMuiruri" },

    // MOBILE AND CONNECTIVITY
    { networkSlug: "yazing", merchantSlug: "amigosim", category: "MOBILE_AND_CONNECTIVITY", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "attmobile", category: "MOBILE_AND_CONNECTIVITY", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "consumercellular", category: "MOBILE_AND_CONNECTIVITY", username: "KennethMuiruri" },

    // TRAVEL AND TRANSPORT
    { networkSlug: "yazing", merchantSlug: "priceline", category: "TRAVEL_AND_TRANSPORT", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "budget", category: "TRAVEL_AND_TRANSPORT", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "cheapoair-ca", category: "TRAVEL_AND_TRANSPORT", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "foxrentacar", category: "TRAVEL_AND_TRANSPORT", username: "KennethMuiruri" },

    // PETS AND ANIMALS
    { networkSlug: "yazing", merchantSlug: "petcaresupplies", category: "PETS_AND_ANIMALS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "canadapetcare", category: "PETS_AND_ANIMALS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "hillspet", category: "PETS_AND_ANIMALS", username: "KennethMuiruri" },

    // HEALTH AND WELLNESS
    { networkSlug: "yazing", merchantSlug: "bodi", category: "HEALTH_AND_WELLNESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "ecowisevitamins", category: "HEALTH_AND_WELLNESS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "hello.health", category: "HEALTH_AND_WELLNESS", username: "KennethMuiruri" },

    // ENTERTAINMENT AND GIFTS
    { networkSlug: "yazing", merchantSlug: "giftcards.com", category: "ENTERTAINMENT_AND_GIFTS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "stubhub", category: "ENTERTAINMENT_AND_GIFTS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "goldbelly", category: "ENTERTAINMENT_AND_GIFTS", username: "KennethMuiruri" },
    { networkSlug: "yazing", merchantSlug: "photowhoa", category: "ENTERTAINMENT_AND_GIFTS", username: "KennethMuiruri" },

    // HOME AND LIFESTYLE
    { networkSlug: "yazing", merchantSlug: "gardenreet", category: "HOME_AND_LIFESTYLE", username: "KennethMuiruri" },
  ]

  for (const dest of destinations) {
    const network = await db.affiliateNetwork.findUniqueOrThrow({
      where: { name: dest.networkSlug },
    })

    await db.affiliateLink.create({
      data: {
        program: {
          create: {
            networkId: network.id,
            programName: `${dest.networkSlug}-program`,
          },
        },
        merchantSlug: dest.merchantSlug,
        destinationUrl: `https://yazing.com/deals/${dest.merchantSlug}/${dest.username}`,
        category: dest.category,
        status: "ACTIVE",
      },
    })
  }

  console.log("Seed completed successfully")
}

main()
  .then(async () => {
    await new PrismaClient().$disconnect()
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })