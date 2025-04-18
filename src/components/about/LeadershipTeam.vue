<template>
  <section class="md:py-20 py-12 bg-white text-[#404040] font-switzer">
    <div class="container mx-auto px-4">
      <!-- Heading: The Team -->
      <div class="pb-12  md:pb-20  grid md:grid-cols-4 gap-8 md:gap-12">
        <div>
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">03</p>
          <h3 class="text-sm md:text-2xl font-light">The Team</h3>
        </div>

        <div class="md:col-span-3 grid md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h2 class="text-[24px] md:text-[44px] font-cormorant font-medium text-txtPrimary-color md:mb-4">Our Leadership Team</h2>
          </div>
          <div>
            <p class="text-base font-light md:text-xl leading-relaxed">
              Serenity Cruise Lines is led by industry veterans with extensive experience in cruise
              operations, hospitality, finance, and business strategy. Our leadership team brings over
              100 years of combined expertise from the world’s leading cruise brands.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Cards -->
      <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:mb-16 mb-12">
        <div v-for="member in team" :key="member.id" class="bg-white overflow-hidden">
          <div class="border p-3 mb-6 shadow-sm">
            <img :src="member.image" :alt="member.name" class="w-full h-[400px] md:h-[486px] object-cover" />
            <div class="px-4 py-4 text-center">
              <h3 class="italic font-semibold text-2xl font-hand text-txtPrimary-color" :class="{ 'pt-6': !member.role }">
                {{ member.name }}
              </h3>
              <p v-if="member.role" class="italic font-hand text-xl text-txtPrimary-color">
                {{ member.role }}
              </p>
            </div>
          </div>
          <div v-if="member.description" class="text-center text-base font-light md:text-xl px-4 pb-4">
            <p>{{ member.description || " " }}</p>
          </div>
          <ul v-if="member.bullets" class="font-light text-base md:text-xl px-6 pb-6 list-disc text-left">
            <li v-for="(point, idx) in member.bullets" :key="idx">{{ point }}</li>
          </ul>
        </div>
      </div>

      <!-- Investors & Partners -->
      <div class="md:pt-20 pt-12 md:mb-20 mb-12 grid md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-200 text-[#404040]">
        <div>
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">04</p>
          <h3 class="text-sm md:text-2xl font-light">Investors & Partners</h3>
        </div>
        <div class="md:col-span-3 grid md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h2 class="text-[24px] md:text-[44px] font-cormorant font-medium text-txtPrimary-color mb-4">
              Our Commitment to Investors & Partners
            </h2>
          </div>
          <div>
            <p class="text-sm md:text-xl font-light leading-relaxed mb-6 md:mb-32">
              Serenity Cruise Lines is expanding rapidly, with plans for an IPO in the next 8–10 years.
              We are actively seeking strategic investors and business partners to join us in creating
              the next-generation cruise experience in Asia.
            </p>
            <BaseButton
              width="100%"
              height="56px"
              class="sm:w-[332px] sm:h-[64px] border border-serenityBlue"
              bg="transparent"
              color="text-primary"
              :rounded="0"
            >
              INVESTOR OPPORTUNITIES
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Investor Highlights -->
      <h1 class="text-[28px] md:text-[44px] font-cormorant font-medium text-txtPrimary-color md:mb-16 mb-8">Investor Highlights</h1>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="bg-secondary font-switzer px-6 md:px-8 py-8 md:py-10 rounded-md border border-blue-100">
          <h4 class="text-xl md:text-2xl text-[#062E4B] mb-2 font-normal">Rapidly Growing Market</h4>
          <p class="text-[#062E4B] text-base md:text-lg font-light leading-relaxed">
            The cruise industry in Asia is expected to expand significantly, particularly in China, South Korea, and Southeast Asia.
          </p>
        </div>
        <div class="bg-secondary font-switzer px-6 md:px-8 py-8 md:py-10 rounded-md border border-blue-100">
          <h4 class="text-xl md:text-2xl text-[#062E4B] mb-2">Phased Growth Strategy</h4>
          <p class="text-[#062E4B] text-base md:text-lg leading-relaxed font-light">
            Ensuring low financial risk with a focus on market research before fleet expansion.
          </p>
        </div>
        <div class="bg-secondary font-switzer px-6 md:px-8 py-8 md:py-10 rounded-md border border-blue-100">
          <h4 class="text-xl md:text-2xl text-[#062E4B] mb-2">Sustainable & Future-Proof Operations</h4>
          <p class="text-[#062E4B] text-base md:text-lg leading-relaxed font-light">
            Investment in eco-friendly ships and strategic port partnerships to ensure long-term success.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

const team = [
  {
    id: 1,
    name: "Martin O'Dee",
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
