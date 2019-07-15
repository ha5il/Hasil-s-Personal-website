<template>
<div id="quotes" class="mt-5">
      <b-row>
        <b-col cols="4" v-for="(quote, idx) in quotes" :key="idx">
            <b-card class="mb-3">
                <b-card-text>
                    <span v-for="quoteLine in quote" :key="quoteLine">
                        {{quoteLine}}<br>
                    </span>
                </b-card-text>
            </b-card>
        </b-col>
      </b-row>
</div>
</template>

<style lang="scss">
#quotes {
    .card {
        border: none;
        box-shadow: 0px 0px 10px 0px #d0d0d0;
        transition: 0.33s all;
    }

    .card-text {
        color: #6E161C;
    }

    .card:hover {
    transform: scale(1.1);
  }
}
</style>

<script>
import _ from 'lodash';

export default {
    data() {
        return {
            quotes: [
                [
                    'May be its mine bad-luck',
                    'Or yours not to get me',
                    'But I still have hope',
                    'Of being yours'
                ],
                [
                    'If you know that I am genius',
                    'Then know that you made me genius',
                    'Everyone don\'t accept me as genius',
                    'Because they aren\'t genius to belief me as genius'
                ],
                [
                    'Life for me is just a result of experiments being performed by far more developed creatures.'
                ],
                [
                    'Dream big!',
                    'But not so big that it becomes a mess, and you may never reach reality.'
                ],
                [
                    'Dreaming of getting you',
                    'I loosed everything',
                    'Cheerfulness of smile',
                    'And all the dreams of life'
                ],
                [
                    'Give me another Chance',
                    'Then,',
                    'You will Get',
                    'Less than I Gain...'
                ],
                ['When I was small I felt like a Superhero as my father threw me up in the air.',
                    'Now after reaching this success peak I unmask - Real Superhero made me Superhero!'
                ],
                [
                    'Congratulations to your mom and dad for birth of a sweet child!',
                    '',
                    'Sorry that I couldn\'t wish them when you were born.'
                ],
                [
                    'Oh great!',
                    'I never recognized Sunshine shining me, within me.'
                ],
                [
                    'I will miss you',
                    'not because you taught me,',
                    'not because you helped me on all steps of education;',
                    'but only because',
                    'you made me a leader to lead as an perfect Electrical Engineer.'
                ],
                [
                    'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own.'
                ]
            ],
        }
    },
    created() {
      this.quotes = _.shuffle(this.quotes)
    }
}
</script>
