<!--
<BoardCell title="My Component"/>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="cell-style">  
        <div>{{ title }}</div>
        <div>
            <slot></slot>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class BoardCellController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
        }
    }

    export default new BoardCellController('BoardCell');

</script>
<style scoped>

    .cell-style {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

    .cell-text {
        color: rgb(228, 241, 148);
        font-size: 4.5em;
        text-shadow: 2px 2px #777;
    }

</style>