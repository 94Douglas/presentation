    <template>
  <the-header></the-header>
  <main>
    <!-- Start av hela programmet och exporteras ut så det syns på hemsidan. -->
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import TheHeader from "./components/Header/HeaderComp.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Medium";
  src: local("Montserrat"),
    url(./fonts/Montserrat/Montserrat-Medium.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;

  /* width: 100%; */
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
