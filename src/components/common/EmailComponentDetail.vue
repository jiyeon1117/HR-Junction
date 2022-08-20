<template>
  <div id="EmailComponentDetail">
    <div class="top">
      <div class="process-icon">
        <img class="process-img" src="../../assets/process-type.png">
      </div>
    </div>
    <div class="middle">
      <div class="components-item">
        <span class="components-name">Result Email</span>
        <span class="components-description">Explanation of this Component</span>
      </div>
    </div>
    <div class="bottom">
      <span class="email">Subject</span>
      <span class="email-title">[userName] - Acceptance of Job Offer</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailComponentDetail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#EmailComponentDetail{
  width: 305px;
  height: 182px;
  border-radius: 8px;
  margin-bottom: 32px;
  padding: 17px 15px 21px 27px;
  background-color: white;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .2);
}


.top{
  display: flex;
  justify-content: flex-end;
  height: 28px;
}

.process-icon{
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: #CD7332;
}

.process-img{
  width: 19px;
  height: 19px;
  margin: 0 auto;
  align-self: center;
}

.middle{
  display: flex;
  height: 40px;
  margin-bottom: 80px;
}

.components-item{
  display: flex;
  flex-direction: column;
}

.components-name{
  color: #252423;
  font-size: 16px;
  font-weight: 700;
}

.components-description{
  color: #252423;
  font-size: 12px;
  font-weight: 400;
}

.border{
  border-bottom: 1px solid #D6D6D6;
}

.bottom{
  display: flex;
  height: 30px;
  flex-direction: column;
}

.email{
  font-size: 10px;
  font-weight: 400;
  color: #252423;
}

.email-title{
  font-size: 12px;
  font-weight: 400;
  color: #838383;
}
</style>
