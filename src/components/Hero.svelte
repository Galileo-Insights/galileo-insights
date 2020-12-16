<script>
  import Logo from "./Logo.svelte";

  import Orbit from "./Orbit.svelte";
</script>

<div class="relative bg-gray-900 overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div
      class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg
        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <div class="flex align-center content-center">
                <div class="h-12 w-12">
                  <svg viewbox="-16 -16 32 32"><Logo /></svg>
                </div>
                <span class="text-gray-800 text-2xl pl-2 self-center">Galileo Insights</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main
        class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Our team grew up building bulletproof software that runs Fortune 20
            companies. We left corporate America because we wanted to go faster,
            be nimble, and experiment. We like innovating on game-changing
            products with game-changing people.
          </p>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Let us accelerate the evolution of your company and your technology
            products. We take you from two-guys-in-a-garage, cobbling together
            MVPs, to a reliable Product Team, building robust and exciting
            products that clients demand and that big investors love.
          </p>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <Orbit />
  </div>
</div>
