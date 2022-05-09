<!--
<j-nickname>My Component</j-nickname>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="component-style">  <!-- Just one main element per template -->
        <span class="field">
            <slot />
        </span>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class NicknameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
        }
    }

    export default new NicknameController('jNickname');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .field {
        font-size: 1.5em;
        font-weight: bold;
        color: fuchsia;
    }


</style>