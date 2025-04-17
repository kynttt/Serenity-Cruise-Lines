<template>
  <section class="py-20 bg-white text-[#404040]">
    <div class="container mx-auto px-4">
      <!-- Heading: The Team -->
      <div class="pb-20 mb-20 grid md:grid-cols-4 gap-12">
  <!-- Left Column: Section Label -->
  <div>
    <p class="text-2xl tracking-wide uppercase">03</p>
    <h3 class="text-2xl font-medium">The Team</h3>
  </div>

  <!-- Right Column: Title + Description in 2-column grid -->
  <div class="md:col-span-3 grid md:grid-cols-2 gap-12">
    <div>
      <h2 class="text-[44px] font-cormorant font-bold text-txtPrimary-color mb-4">Our Leadership Team</h2>
    </div>
    <div>
      <p class="text-xl leading-relaxed ">
        Serenity Cruise Lines is led by industry veterans with extensive experience in cruise
        operations, hospitality, finance, and business strategy. Our leadership team brings over
        100 years of combined expertise from the world’s leading cruise brands.
      </p>
    </div>
  </div>
</div>


      <!-- Team Cards -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div v-for="member in team" :key="member.id" class="bg-white  overflow-hidden">
          <div class="border p-3 mb-6 shadow-sm">
          <img :src="member.image" :alt="member.name" class="w-[486px] h-[486px] object-cover" />
          <div class="px-4 py-4 text-center">
            <h3 class="italic font-semibold text-2xl font-hand">{{ member.name }}</h3>
            <p class="italic font-hand text-xl">{{ member.role }}</p>
          </div>
          </div>
          <div v-if="member.description" class="text-center text-xl text-[#4B5563] px-4 pb-4">
            <p>{{ member.description || " " }}</p>
          </div>
          <ul v-if="member.bullets" class="text-xl text-[#4B5563] px-6 pb-6 list-disc text-left">
            <li v-for="(point, idx) in member.bullets" :key="idx">{{ point }}</li>
          </ul>
        </div>
      </div>

      <!-- Investors & Partners -->
      <div class="pt-12 border-t border-gray-200 grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <p class="text-2xl tracking-wide uppercase">04</p>
          <h3 class="text-2xl font-medium text-[#404040]">Investors & Partners</h3>
        </div>
        <div class="md:col-span-3 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 class="text-[32px] font-cormorant font-bold text-txtPrimary-color">
            Our Commitment to Investors & Partners
          </h2>
          <p class="text-[#4B5563] max-w-2xl text-xl font-light leading-relaxed">
            Serenity Cruise Lines is expanding rapidly, with plans for an IPO in the next 8–10 years. We are actively seeking strategic investors
            and business partners to join us in creating the next-generation cruise experience in Asia.
          </p>
        </div>
      </div>

      <!-- Investor Highlights -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#F0F9FF] p-6 rounded-md">
          <h4 class="text-lg font-semibold text-[#0A0A0A] mb-2">Rapidly Growing Market</h4>
          <p class="text-[#4B5563] text-sm leading-relaxed">
            The cruise industry in Asia is expected to expand significantly, particularly in China, South Korea, and Southeast Asia.
          </p>
        </div>
        <div class="bg-[#F0F9FF] p-6 rounded-md">
          <h4 class="text-lg font-semibold text-[#0A0A0A] mb-2">Phased Growth Strategy</h4>
          <p class="text-[#4B5563] text-sm leading-relaxed">
            Ensuring low financial risk with a focus on market research before fleet expansion.
          </p>
        </div>
        <div class="bg-[#F0F9FF] p-6 rounded-md">
          <h4 class="text-lg font-semibold text-[#0A0A0A] mb-2">Sustainable & Future-Proof Operations</h4>
          <p class="text-[#4B5563] text-sm leading-relaxed">
            Investment in eco-friendly ships and strategic port partnerships to ensure long-term success.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  {
    id: 1,
    name: "Martin O'Dea",
    role: 'Chief Executive Officer',
    image: '/src/assets/images/team/ceo.jpg',
    description: 'Visionary founder with decades of experience in business strategy, tourism, and international operations.'
  },
  {
    id: 2,
    name: 'Tony Eyres',
    role: 'Chief Operating Officer',
    image: '/src/assets/images/team/chef.jpg',
    description: 'Specialist in cruise line management, fleet expansion, and operational excellence.'
  },
  {
    id: 3,
    name: 'Senior Leadership Team',
    role: '',
    image: '/src/assets/images/team/director.jpg',
    bullets: [
      'Experts in marine operations, finance, marketing, and guest services.',
      'Former executives from leading cruise companies ensuring a world-class experience.'
    ]
  }
]
</script>
