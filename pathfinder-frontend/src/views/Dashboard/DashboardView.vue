<template >
    <div class="d-flex mt-10 h-100">
        <v-card class="mx-auto">
            <v-toolbar color="primary">
                <div class="ma-auto d-flex ">
                    <v-select solo :items="countries" @change="change($event)" v-model="country" label="Country"
                        class="mr-5"></v-select>
                    <v-select solo v-model="city" :items="cities" label="City" class="mr-5"></v-select>
                </div>
            </v-toolbar>
            <div v-if="loading">
                <v-skeleton-loader type="date-picker" class="mx-auto" max-height="1000">
                </v-skeleton-loader>
                <v-skeleton-loader class="mx-auto" max-height="1000" type="card"></v-skeleton-loader>
                <v-skeleton-loader class="mx-auto" max-height="1000" type="card"></v-skeleton-loader>
            </div>


        </v-card>
        <v-btn elevation="2" fab class="floating">
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '../../store/global';
import router from '../../router/index';
import { checkAuthentication, loggedInRef } from '../../services/authService';

async function fetchCountries() {

}

const countryDict = {
    "Romania": [
        "Timisoara",
        "Bucharest",
        "Cluj-Napoca",
        "Iasi"
    ],
}

export default defineComponent({



    setup() {

        return {
            countryDict,
        }
    },

    mounted() {

    },

    data() {



        return {

            countries: Object.keys(countryDict),
            cities: [],
            country: '',
            state: '',
            city: '',
            loading: true,
        }
    },


    methods: {
        fetch() {

        },
        change(event: string) {
            this.cities = countryDict[event]

        },
        countryChanged() {
        },

    },





})
</script>
<style >
.floating {
    position: fixed;
    bottom: 0;
    margin-bottom: 2px;
    margin-left: 50%;
    margin-right: 50%;
}
</style>