<style lang="css">

div .view-profile {}

.bg1 {
    color: red;
}

.bg2 {
    color: green;
}

.bg3 {
    color: blue;
}

.bg4 {
    color: orange;
}
</style>

<template lang="html">

<!-- <div :class="{bg1: isbg1, bg2: isbg2, bg3: isbg3, bg4: isbg4}"> -->
<div :class="divClass(userId)">
    <h2>Profile for {{ userId }}</h2>
    <img :src="getImgUrl(userId)">
</div>

</template>

<script>

export default {
    name: 'ViewProfile',
    data() {
        return {
            userId: this.$route.params.user_id,
            num: null
        }
    },
    methods: {
        updateId() {
                this.userId = this.$route.params.user_id
            },
            getImgUrl(pic) {
                return require('../assets/SAD-' + pic + '.jpg')
            },
            divClass(num) {
                return 'bg' + num
            }
    },
    watch: {
        $route: 'updateId'
    }
}

</script>
