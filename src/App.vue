<template>
  <div>
    <h1>{{msg}}</h1>
    <ul>
        <li v-for="name in names">{{name}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Hello World from gaurav",
                names: [
                    'gaurav',
                    'vibhor',
                    'arjun',
                    'ninja',
                    'Mac Ron'
                ]
            }
        }
    }
</script>