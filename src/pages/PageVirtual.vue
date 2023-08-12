<template>
  <q-page class="q-pa-lg">
    <h4 class="q-mt-none text-weight-bold">Virtual Assisted Page</h4>

    <div class="row" >
      <div class="col-4 col-shrink" v-for="button in buttons" :key="button.index">
          <q-btn
          padding="md"
          color="primary"
          >
          {{ button }}
          </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'PageVirtual',

  setup(){
    let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return {
      buttons
    }
  }
}



</script>
