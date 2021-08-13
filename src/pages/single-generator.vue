<template>
  <div>
    <div class="container-fluid">
      <div class="page-title"></div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h6>Real Time Measurements</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <LineChart />
                </div>
                <div class="col">
                  <LineChart />
                </div>
                <div class="col">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../components/lineChart.vue';

export default {
  components: {
    LineChart,
  }
};
</script>