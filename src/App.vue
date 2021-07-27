  <template>
    <div id="app">
      <Header/>
      <main class="main">
        <HomeFirstBlock/>
        <HomeAboutMe/>
        <HomeKeySkills/>
        <HomeGoToContacts/>
        <HomeGallery/>
        <HomeContactMe/>
      </main>
      <Footer/>
    </div>
</template>
<script>


import Footer from "./components/base/Footer";
import HomeFirstBlock from "./components/base/HomeFirstBlock";
import HomeAboutMe from "./components/base/HomeAboutMe";
import HomeKeySkills from "./components/base/HomeKeySkills";
import HomeGoToContacts from "./components/base/HomeGoToContacts";
import HomeContactMe from "./components/base/HomeContactMe";
import HomeGallery from "./components/base/HomeGallery";
import Header from "./components/base/Header";




export default {
  name: 'App',
  components: {
    Header,
    HomeGallery,
    HomeContactMe,
    HomeGoToContacts,
    HomeKeySkills,
    HomeAboutMe,
    HomeFirstBlock,
    Footer
  },
}
</script>

<style lang="scss">

div {
  color: black;
}
</style>
