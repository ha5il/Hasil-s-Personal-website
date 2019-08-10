<template>
  <div id="homepage" class="section">
    <b-row class="pt-3">
      <b-col>
        <b-card class="mb-3" title="Who am I?">
            <i class="material-icons">contact_support</i>
          <b-card-text
            class="justified"
          >Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. Though having Graduation of Electrical Engineering I do have skills in Design, Web Development, Electrical repair and Electronics simulation. Out of the box, I write poems, speak quotes and try altering cloud saved data.</b-card-text>
        </b-card>
        <b-card title="What I do?">
          <b-card-text>
            <span class="text-info">
              Web Developer at View9 | Nepal
              <br />(Jan 2019 - Present)
              <br />
            </span>
            I develop the backend of website and connect its database to different platforms with api.
            <br />
            <br />
            <span class="text-info">
              Juniour Android Developer at Fixolla | India
              <br />(Feb 2018 - Dec 2018)
              <br />
            </span>
            I was not only the part of android development team but also developed api services for the website.
            <br />
            <br />
            <span class="text-info">
              Security Analyst at Fixolla | India
              <br />(Sep 2017 - Feb 2018)
              <br />
            </span>
            I helped the company in building their database and securing it from different threats.
            <br />
            <br />
            <span class="text-info">
              Service and Sales Engineer at A2Z Laundry Solutions | India
              <br />(Dec 2016 - Dec 2018)
              <br />
            </span>
            I was involved in laundry business setup, marketing and it growth for dorzens of laundries in India. I am one of the authorised service Engineer for Danube International (France), Pony(Italy) and SEKO (USA). Beside these, I am involved in other brands like Electrolux (Sweden), Maytag (USA), Speedqueen (USA), Hydrosystems (USA), SEITZ (Germany) and Sunrise (India).
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-img class="pb-3" src="/timeline.png" fluid alt="Hasil Timeline"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#homepage {
  min-height: 90vh;

  .card {
    border: none;
    box-shadow: 0px 0px 10px 0px #d0d0d0;
  }

  .card-title {
    color: #E6A410;
  }

  .card-text {
    color: #6e161c;

    span {
      font-size: 12px;
      font-weight: 500;
    }
  }

  .justified {
    text-align: justify;
  }
}
</style>
