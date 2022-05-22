<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="board-container">
        <div class="board">
            <Game-Board title="Game 1">100</Game-Board>
        </div>
        
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import GameBoard from '@/components/GameBoard.vue'

    class BoardController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Vue Jeopardy',
            }
        }
    }

    export default new BoardController('pgBoard', { GameBoard });

</script>
<style>
/* Local styles for this template */
    .board-container {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .board {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>
