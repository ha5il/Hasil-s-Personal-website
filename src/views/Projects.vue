<template>
<div id="projects" class="mt-5">
        <h4 class="p-3">IT Projects</h4>
    <b-row>
        <b-col cols="6" v-for="(project, idx) in itprojects" :key="idx">
            <b-card class="mb-3" :title="project.title">
                <b-card-text>
                    {{project.description}}<br>
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
          <h4 class="p-3">Electrical &amp Electronics Projects</h4>
        <b-row>
        <b-col cols="12" v-for="(project, idx) in electricalprojects" :key="idx">
            <b-card class="mb-3" :title="project.title">
                <b-card-text>
                    {{project.description}}<br>
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
</div>
</template>

<style lang="scss">
#projects {
    .card {
        border: none;
        box-shadow: 0px 0px 10px 0px #d0d0d0;
    }

    .card-title {
        color: #6E161C;
        font-weight: normal;
    }

    .card-text {
        color: #6E161C;
    }

    h4 {
      color: #6E161C;
      font-weight: bold;
    }
}
</style>

<script>
export default {
    data() {
        return {
            electricalprojects: [{
                'title': 'RFID Limitor',
                'description': 'An Arduino UNO based project for limiting the RFID Scans.'
            }, {
                'title': 'RABC Analyser',
                'description': 'Windows console based app for extracting the total washes done in Danube Washer. Also C# based GUI app is partially developed!'
            }, {
                'title': 'Electrical Thief Eliminator',
                'description': 'This device detects, locates and terminates the electricity thief from the supply line.'
            }, {
                'title': 'Electrical Performance Analyser',
                'description': 'An Arduino UNO based project for realtime data recording and analysis.'
            }, ],
            itprojects: [{
                'title': 'Intranery',
                'description': '...'
            }, {
                'title': 'Banquet City',
                'description': '...'
            }, {
                'title': 'KTM Retail',
                'description': '...'
            }, {
                'title': 'Foreveryng',
                'description': '...'
            }, ]
        }
    }
}
</script>
