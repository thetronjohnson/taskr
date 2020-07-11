<template>
  <div class="row">
    <div class="col-3 col">
      <div class="high">High</div>
      <draggable
        id="high"
        data-source="juju"
        class="list-group"
        draggable=".item"
        group="a"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <div
          class="rounded shadow-lg  list-group-item item"
          v-for="element in cards"
          :key="element.title"
        >
          <div class="card">
            <div class="card-body">
              <h4 class="card-title" v-show="!showField('title')" @click="focusField('title')">{{ element.title }} </h4>
              <input v-model="element.title" v-show="showField('title')" type="text"
               @focus="focusField('title')" @blur="blurField">

              <h5 class="card-subtitle" v-show="!showField('tag')" @click="focusField('tag')" > {{ element.tag }}</h5>
              <input v-model="element.tag" v-show="showField('tag')" type="text"
               @focus="focusField('tag')" @blur="blurField">              
              <p class="card-text" v-show="!showField('text')" @click="focusField('text')">{{ element.text }}</p>
              <input v-model="element.text" v-show="showField('text')" type="text"
               @focus="focusField('text')" @blur="blurField">
            </div>
          </div>
        </div>
      </draggable>
    </div>
    <div class="col-3 col">
      <div class="med">Medium</div>
      <draggable
        id="high"
        data-source="juju"
        class="list-group"
        draggable=".item"
        group="a"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      ></draggable>
    </div>
    <div class="col-3 col">
      <div class="low">Low</div>
      <draggable
        id="high"
        data-source="juju"
        class="list-group"
        draggable=".item"
        group="a"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      ></draggable>
    </div>
    <div class="col-3 col add">
      <button>Add Card</button>
    </div>
  </div>
</template>

<script>

import draggable from 'vuedraggable'

export default {
  name: "List",
  components:{
    draggable
  },
  data() {
    return {
      cards: [
        { 'title': "Add your title here", 'tag': "Add your tag here", 'text': "Add the details here", }
      ],
      editField:' '
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 250,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods:{
    focusField(name){
      this.editField = name
    },
    blurField(){
      this.editField=' '
    },
    showField(name){
      return(this.cards[name]== ' ' || this.editField==name )
    }
  }
};
</script>
<style scoped>
.row {
  margin-top: 80px;
  margin-left: 50px;
  margin-right: 50px;
}
.high {
  background: #ff3b3b;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
}
.med {
  background: #ffff00;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
}
.low {
  background: #00ff40;
  font-weight: 900;
  padding-top: 10px;
  padding-bottom: 10px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.card{
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
}
.card:hover{
    cursor:-moz-grab
}
.card:active{
    cursor: -moz-grabbing;
}
.add{
 margin-top: 20vh;
}

</style>