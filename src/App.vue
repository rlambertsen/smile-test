<template>
    <div id="app">
        <selectComponent id="countries"
                         label="Countries"
                         :options="countries"
                         @input="fetchStates(selectedCountry)"
                         v-model="selectedCountry"
                         object-key="country_name"
                         label-key="country_name"
                         v-if="countries"
        ></selectComponent>
        <loader v-else></loader>
        <template v-if="selectedCountry">
            <selectComponent id="states"
                             label="States"
                             :options="states"
                             @input="fetchCities(selectedState)"
                             v-if="states"
                             v-model="selectedState"
                             object-key="state_name"
                             label-key="state_name"
            ></selectComponent>
            <loader v-else></loader>
        </template>
        <template v-if="selectedState">
            <template v-if="cities && cities.length > 0">
                <selectComponent id="cities"
                                 label="Cities"
                                 :options="cities"
                                 v-model="selectedCities"
                                 ref="cities"
                                 :multiple="true"
                                 object-key="city_name"
                                 label-key="city_name"
                ></selectComponent>
                <p>{{selectedCities}}</p>
                <p>Cities Selected: {{selectedCities.length}}</p>
                <btn @click="removeAllCities()" text="Clear Cities" classes="button red"></btn>
                <btn @click="selectAllCities()" text="Select All" classes="button green"></btn>
            </template>
            <loader v-else-if="cities === null"></loader>
            <p v-else>No cities found for this state.</p>
        </template>
        <btn @click="startOver" v-if="selectedCountry" text="Start Over" classes="button yellow"></btn>
    </div>
</template>

<script>


export default {
    name: 'App',
    computed: {
        /*
        * Var holding header config
        * @returns {Object}
        */
        loginHeader() {
            return {
                'Accept': 'application/json',
                'api-token': this.$apiConfig.api_token,
                'user-email': this.$apiConfig.user_email
            }
        },
        /*
        * Var holding header config
        * @returns {Object}
        */
        bearerHeader() {
            return {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        }
    },
    watch: {
        /*
        * Watch token for changes
        * @returns {Function}
        */
        token() {
            if (this.token) {
                this.reuseFetch('https://www.universal-tutorial.com/api/countries/', null, this.bearerHeader).then((response) => {
                    this.countries = response
                }).catch(error => console.error(error))
            }
        }
    },
    data() {
        return {
            token: null,
            countries: null,
            states: null,
            cities: null,
            selectedCountry: null,
            selectedState: null,
            selectedCities: [],
        }
    },
    methods: {
        /*
        * try/catch fetch() wrapper
        * @params {String url, String One of XHR request type, Object Headers}
        * @returns JSON response from api / error
        */
        async reuseFetch(url, method, headers) {
            try {
                let response = await fetch(url, {
                    method: method || 'GET',
                    mode: 'cors',
                    headers: headers,
                });
                return response.json()
            } catch (error) {
                return error
            }
        },
        /*
        * Fetch States based on user country selected
        * @param {User Selected Country}
        * @returns JSON response from api / error
        */
        fetchStates(country) {
            this.states = null
            this.reuseFetch('https://www.universal-tutorial.com/api/states/'+ encodeURIComponent(country), null, this.bearerHeader).then((response) => {
                this.states = response
            }).catch(error => console.error(error))
        },
        /*
        * Fetch Cities based on user country selected
        * @param {User Selected Country}
        * @returns JSON response from api / error
        */
        fetchCities(state) {
            this.removeAllCities()
            this.cities = null
            this.reuseFetch('https://www.universal-tutorial.com/api/cities/'+ encodeURIComponent(state), null, this.bearerHeader).then((response) => {
                this.cities = response
                this.$nextTick().then(() => {
                    if (this.$refs.cities) {
                        this.$refs.cities.$refs.select.focus()
                    }
                })
            }).catch(error => console.error(error))
        },
        /*
        * Remove all cities selected
        */
        removeAllCities() {
            if (this.$refs.cities) {
                this.$refs.cities.$refs.select.options.forEach(item => {
                    item.selected = false
                })
            }
            this.selectedCities = []
        },
        /*
        * Select all cities in the select input
        */
        selectAllCities() {
            if (this.$refs.cities) {
                this.$refs.cities.$refs.select.focus()
                this.$refs.cities.$refs.select.options.forEach(item => {
                    item.selected = true
                })
            }
            this.selectedCities = [...this.$refs.cities.$refs.select.options].map(o => o.value)
        },
        /*
        * Clear everything
        */
        startOver() {
            this.selectedCountry = null
            this.selectedState = null
            this.selectedCities = []
        },
    },
    created() {
        this.reuseFetch('https://www.universal-tutorial.com/api/getaccesstoken', null, this.loginHeader).then((response) => {
            this.token = response.auth_token
        }).catch(error => console.error(error))

    },
}
</script>

<style lang="scss" scoped>

</style>
