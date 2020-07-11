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
          class="rounded shadow-lg list-group-item item"
          v-for="element in cards"
          :key="element.title"
        >
          <div class="card">
            <div class="card-body">
              <label-edit
                class="card-title"
                v-bind:text="element.title"
                placeholder="Enter text value"
                v-on:text-updated-blur="textUpdateCallbackBlur"
                v-on:text-updated-enter="textUpdateCallbackEnter"
              />

              <label-edit
                class="card-subtitle"
                v-bind:text="element.tag"
                placeholder="Enter text value"
                v-on:text-updated-blur="textUpdateCallbackBlur"
                v-on:text-updated-enter="textUpdateCallbackEnter"
              />

              <label-edit
                class="card-text"
                v-bind:text="element.text"
                placeholder="Enter text value"
                v-on:text-updated-blur="textUpdateCallbackBlur"
                v-on:text-updated-enter="textUpdateCallbackEnter"
              />
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
      >
       
      </draggable>
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
      >
    
      </draggable>
    </div>
    <div class="col-3 col add">
      <button @click="addElement">Add Card</button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import LabelEdit from "label-edit";

export default {
  name: "List",
  components: {
    draggable,
    LabelEdit
  },
  data() {
    return {
      cards: [],
      text: "Click to edit!"
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
  methods: {
    textUpdated: function(text) {
      this.text = text;
    },
    addElement: function() {
      this.cards.push({
        title: "Add your title here",
        tag: "Add your tag here",
        text: "Add the details here"
      });
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
.card {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
}
.card:hover {
  cursor: -moz-grab;
}
.card:active {
  cursor: -moz-grabbing;
}
.add {
  margin-top: 20vh;
}
.card-title {
  font-size: 28px;
  font-weight: bold;
}
.card-subtitle {
  font-size: 16px;
  text-transform: uppercase;
}
.card-text {
  font-size: 22px;
}
</style>