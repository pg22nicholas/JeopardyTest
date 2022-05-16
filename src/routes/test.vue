<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="test-container">
        <div class="test">
            <h1 class="title">About</h1>
            <div class="dialog">
                <h3 class="title">Welcome to {{ name }}</h3>
                <p>This {{ name }} is your Vue.js App</p><br/>
            </div>

            <buzz-button title="Bzzzt" />

        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    import BuzzButton from '@/components/BuzzButton.vue'

    class TestController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Vue Jeopardy',
            }
        }
    }

    export default new TestController('pgAbout', { BuzzButton });

</script>
<style>
/* Local styles for this template */
    .test-container {
        display: inline-block;
        width: 100%;
    }

    .test {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
