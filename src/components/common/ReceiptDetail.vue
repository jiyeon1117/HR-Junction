<template>
  <div id="ReceiptDetail">
    <div class="top">
      <span class="date">1 hours ago</span>
      <div class="funnel"></div>
    </div>
    <div class="middle">
      <div class="applicant-item">
        <span class="applicant-title">Applicant</span>
        <span class="applicant">Junction Kim</span>
      </div>
      <div class="position-item">
        <span class="position-title">Position</span>
        <span class="position">UX Designer</span>
      </div>
    </div>
    <div class="bottom">
      <span class="status">Under evaluation</span>
      <div class="manager"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReceiptDetail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ReceiptDetail{
  display: flex;
  flex-direction: column;
  width: 412px;
  height: 97px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: white;
  padding: 24px 20px 20px 20px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .2);
}

.top{
  display: flex;
  justify-content: space-between;
  height: 12px;
}

.date{
  margin: 0;
  font-weight: 400;
  font-size: 8px;
  color: #878787;
}

.funnel{

}

.middle{
  display: flex;
  margin-top: 19px;
  margin-bottom: 16px;
  height: 100%;
  flex-direction: row;
}

.bottom{
  display: flex;
  height: 20px;
  justify-content: space-between;
}

.status{
  color: #CD7332;
  font-size: 10px;
  font-weight: 400;
  margin: auto 0 0 0;
}

.manager{
  width: 56px;
  height: 20px;
  background-color: blue;
}

.applicant-item{
  display: flex;
  flex-direction: column;
  margin-right: 60px;
}

.applicant-title{
  font-size: 10px;
  font-weight: 400;
  color: #252423;
}

.applicant{
  font-size: 16px;
  font-weight: 700;
  color: #252423;  
}

.position-item{
  display: flex;
  flex-direction: column;
}

.position-title{
  font-size: 10px;
  font-weight: 400;
  color: #252423;
}

.position{
  margin: auto 0;
  font-size: 12px;
  font-weight: 400;
  color: #252423;  
}
</style>
