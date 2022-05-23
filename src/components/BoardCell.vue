<!--
<BoardCell title="My Component"/>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="cell-style">  
        <div class="cell-text">
            <div v-if="!isHidden || isHeader" v-on:click="isHidden = true">
                <slot></slot>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    class BoardCellController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            this.props = {
                isHeader : Boolean
            }

            this.vm = {
                isHidden: false,
            }
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
        min-width: 100px;
        height: 100px;
        padding: 10px;
    }

    .cell-text {
        color: rgb(228, 241, 148);
        font-size: 3em;
        text-shadow: 2px 2px #777;
    }

    .hide {
        visibility: hidden !important;
}

</style>