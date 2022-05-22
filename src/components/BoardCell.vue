<!--
<BoardCell title="My Component"/>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="cell-style">  
        <div class="cell-text">
            <slot></slot>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

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
        align-items: center;
        justify-content: center;
        background-color: aqua;
        width: fit-content;
        height: 100px;
        padding: 10px;
    }

    .cell-text {
        color: rgb(228, 241, 148);
        font-size: 3em;
        text-shadow: 2px 2px #777;
    }

</style>