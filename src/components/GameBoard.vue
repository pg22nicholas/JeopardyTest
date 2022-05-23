<!--
<some-tag-name title="My Component">
    -- user can add their own HTML code here, replaces 'slot' component --
</some-tag-name>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>  <!-- Just one main element per template -->
        <div class="title">{{ title }}</div>
        <div class="board-container" >
            
            <div v-for="header in headers" :key="header.title">
                <div class="board-column">

                    <!-- Cell header -->
                    <Board-Cell :isHeader="true">{{ header.title }}</Board-Cell>

                    <!-- money cells -->
                    <div v-for="row in numRows - 1" :key="row">
                        <Board-Cell :isHeader="false">{{ row * 100 }}</Board-Cell>
                    </div>

                </div> 
            </div> 
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import BoardCell from '@/components/BoardCell.vue'

    class GameBoardController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            this.vm = {
                numColumns: 6,
                numRows: 5,
                headers: [{title: "header1"}, {title: "header2"}, {title: "header3"}, {title: "header4"}, {title: "header5"}, {title: "header6"}]
            }

            // props passed in when using this component
            this.props = {
                title: String
            }
        }
    }

    export default new GameBoardController('GameBoardComponent', { BoardCell });

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .board-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .title {
        font-size: 4.5em;
        height: fit-content;
        width: fit-content;
    }

    .board-column {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

</style>