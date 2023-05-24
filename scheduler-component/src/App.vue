<template>
  <div id="app">
    <!-- help: https://ej2.syncfusion.com/angular/documentation/schedule/getting-started/#populating-appointments -->
    <ejs-schedule width='100%' height='550px'>
    </ejs-schedule>
  </div>

</template>

<script>
  import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

  export default {
    name: "App",
    components: {
      'ejs-schedule': ScheduleComponent
    },
    provide: {
      schedule: [Day, Week, WorkWeek, Month, Agenda]
    },
    data() {
      return {

      };
    },
  }
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
