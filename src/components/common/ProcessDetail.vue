<template>
  <div id="ProcessDetail">
    <div class="top">
      <div class="number">1</div>
    </div>
    <div class="middle">
      <div class="name">Documents</div>
      <div class="description">Explanation of this process</div>
    </div>
    <div class="process-type">
      <div class="teams-item">
        <img class="teams-img" src="../../assets/teams.png">
        <span class="teams">Teams thread</span>
      </div>
      <div class="border"></div>
      <div class="email-item">
        <img class="email-img" src="../../assets/email.png">
        <span class="email">Automatic mail</span>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ProcessDetail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ProcessDetail{
  display: flex;
  flex-direction: column;
  width: 302px;
  height: 108px;
  border-radius: 8px;
  padding: 16px 21px 16px 21px;
  margin-bottom: 32px;
  background-color: white;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .2);
}

.top{
  display: flex;
  height: 20px;
}

.number{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 20px;
  border-radius: 50%;
  background-color: #CD7332;
  font-size: 10px;
  font-weight: 700;
  color: white;
}

.middle{
  display: flex;
  margin-top: 16px;
  margin-bottom: 20px;
  height: 100%;
  flex-direction: column;
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: #252423;
}

.description{
  font-size: 12px;
  font-weight: 400;
  color: #252423;
  margin: auto 0 0 0;
}

.process-type{
  display: flex;
  height: 12px;
  flex-direction: row;
}

.teams-item{
  display: flex;
  align-items: center;
  width: 78px;
}

.email-item{  
  display: flex;
  align-items: center;
  width: 84px;
}

.teams, .email{
  font-size: 10px;
  font-weight: 300;
  color: #838383;
}

.teams-img, .email-img{
  width: 12px;
  height: 12px;
  margin-right: 4px;
}

.border{
  margin: 0 8px;
  border-left: 1px solid #838383;
}

</style>
