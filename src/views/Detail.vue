<template>
  <div id="detail">
    <cards :dataVal="dataVal" :dataPerson="dataPerson"/>
    <discuss :dataShortCommit="dataShortCommit" :title="dataVal.title" :dataDiscuss="dataDiscuss"/>
  </div>
</template>

<script>
import cards from "@/components/cards";
import discuss from "@/components/discuss";
export default {
  name: "Detail",
  data() {
    return {
      dataVal: null,
      dataPerson: null,
      dataShortCommit: null,
      dataDiscuss: null
    };
  },
  components: {
    cards,
    discuss
  },
  methods: {
    more() {
      return this.$server.more(this.$route.query.id);
    },
    credits() {
      return this.$server.credits(this.$route.query.type, this.$route.query.id);
    },
    shotCommits() {
      let paramObj = {
        count: 4,
        order_by: "hot",
        start: 0,
        ck: "",
        for_mobile: 1
      };
      return this.$server.shotCommits(
        this.$route.query.type,
        this.$route.query.id,
        paramObj
      );
    },
    discuss() {
      let paramObj = {
        start: 0,
        count: 5,
        ck: "",
        for_mobile: 1
      };
      return this.$server.discuss(
        this.$route.query.type,
        this.$route.query.id,
        paramObj
      );
    }
  },
  mounted() {
    /**
     * 详情
     */
    this.more().then(res => {
      this.dataVal = res;
      this.$store.commit("change", {
        flag: "block",
        title: this.dataVal.title,
        bgColor: "#E4A813",
        arrow: true
      });
    });
    /**
     * 演员
     */
    this.credits().then(res => {
      this.dataPerson = res.credits;
    });
    /**
     * 短评
     */
    this.shotCommits().then(res => {
      this.dataShortCommit = res;
    });
    /**
     * 讨论
     */
    this.discuss().then(res => {
      this.dataDiscuss = res;
    });
  }
};
</script>

<style scoped>
#detail {
  margin: 0 18px;
}
</style>