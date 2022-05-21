<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="board-container">
        <Board-Cell>100</Board-Cell>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import BoardCell from '@/components/BoardCell.vue'

    class BoardController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Vue Jeopardy',
            }
        }
    }

    export default new BoardController('pgBoard', { BoardCell });

</script>
<style>
/* Local styles for this template */
    .board-container {
        display: inline-block;
        width: 100%;
    }
</style>
