<template>
  <div id="hire-hasil" class="mt-5">
    <h4>Interested in teaming up with me?</h4>
    <b-row>
      <b-col cols="4" v-for="(skillData, idx) in skills" :key="idx">
        <b-card class="mb-3" :title="skillData.title">
          <b-card-text>
            <span v-for="data in skillData.data" :key="data">
              {{data}}
              <b-table striped hover :items="data"></b-table>
            </span>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#hire-hasil {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
  }

  .card-title {
    color: #E6A410;
    font-weight: normal;
  }

  .card-text {
    color: #6e161c;
  }

  h4 {
    color: #6e161c;
    font-weight: bold;
  }
}
</style>


<script>

export default {
  data() {
    return {
      skills: [
        {
          title: "OS",
          data: [
             { age: 'Linux', first_name: 'Windows', last_name: 'macOS' },
             {under: 'construction!'}
          ],
        }
      ]
    }
  }
}
</script>