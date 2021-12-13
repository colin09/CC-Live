#!/usr/bin/python
# coding=utf-8

import pika   


# amqp://yjp:yjp@RabbitMQ01.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ02.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ03.yjp.com:6000/;
 
mqExchange = 'ex.supplychain.orders.complete'
mqQueue = 'mq.erp.order.SCMJiupiOrderComplete' 


mqQueue = 'mq.erp.allocation.updateCount'
mqMessage = '[{"Id":"e60a4febcf584c81ad323778ea1448d9"}] '

mqQueue = 'mq.erp.allocation.updateCount'
mqMessage = '[{"Id":"e60a4febcf584c81ad323778ea1448d9"}] '

mqQueue = 'mq.erp.product.purchasepricechange.eventmessage'
mqMessage = '[{"CityId":"4812934144123950924"}]'

mqQueue = 'mq.erp.ehr.userInfoChange'
mqMessage = '{"id":10262,"userName":"【测试账号】黄正全（阿里采购）","displayName":"【测试账号】黄正全（阿里采购）","userStatus":1,"userStatusName":null,"workStatus":1,"workStatusName":null,"superior":9312,"superiorName":"黄正全","sex":0,"stationLevel":"0","stationLevelName":"1（员工级）","oaId":14387,"contactWay":"13871901234","email":"530389257@qq.com","personType":3,"personTypeName":"测试人员","userCenterBig":3,"userCenterBigName":"劳动合同","birthday":null,"highestEdu":null,"maritalStatus":null,"affiliation":0,"idCard":null,"entryDate":null,"leaveDate":null,"joinDate":null,"contractBeginDate":1621958400000,"contractEndDate":null,"probationEndDate":null,"positiveDate":null,"driverType":null,"driverTypeName":null,"individualRegister":null,"contractType":null,"contractTypeName":null,"overRegisterDate":null,"businessType":"14","orgType":"5","stationType":"63","companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179706941721236,"deptOaId":26642,"deptName":"阿里地区-[测试]","stationId":4981858874152172419,"stationOaId":95313,"stationName":"城市经理","costCenterName":null,"templateCode":null,"reimbursement":null,"cityId":998,"warehouseId":9981,"bigAreaId":"963245609001708616","partJobs":[{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184933668676,"deptOaId":224643,"deptName":"武汉易尔惠","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":1000001,"warehouseId":10421},{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184933668676,"deptOaId":224643,"deptName":"武汉易尔惠","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":1000001,"warehouseId":10421},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179760247130763,"deptOaId":26643,"deptName":"日喀则-[测试]","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":997,"warehouseId":9971},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179760247130763,"deptOaId":26643,"deptName":"日喀则-[测试]","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":997,"warehouseId":9971},{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184078030660,"deptOaId":218643,"deptName":"花山易尔惠","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":9000001,"warehouseId":90000011},{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184304523077,"deptOaId":219142,"deptName":"山南","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":995,"warehouseId":9951},{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184304523077,"deptOaId":219142,"deptName":"山南","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":995,"warehouseId":9951},{"companyId":1,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4984757184078030660,"deptOaId":218643,"deptName":"花山易尔惠","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":9000001,"warehouseId":90000011},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179731939773065,"deptOaId":31641,"deptName":"拉萨-[测试]","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":999,"warehouseId":9991},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179706941721236,"deptOaId":26642,"deptName":"阿里地区-[测试]","stationId":4981858874127006608,"stationOaId":95314,"stationName":"城市经理(副)","cityId":998,"warehouseId":9981},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179806023764636,"deptOaId":190641,"deptName":"拉萨团队-[测试]","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":999,"warehouseId":0},{"companyId":123450,"companyOaId":1,"companyName":"易久批信息技术有限公司","deptId":4968179806057319055,"deptOaId":202641,"deptName":"阿里团队-测试","stationId":4981858872906464152,"stationOaId":95233,"stationName":"酒类大区采销经理","cityId":998,"warehouseId":9981}]}'

# amqp://yjp:yjp@RabbitMQ01.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ02.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ03.yjp.com:6000/;
mqUser = 'yjp'
mqPwd = 'yjp'
mqHost = 'RabbitMQ01.yjp.com'
mqPort = 6000
# mq 用户名/密码
credentials = pika.PlainCredentials(mqUser,mqPwd)
# 
connection = pika.BlockingConnection(pika.ConnectionParameters(host=mqHost, port=mqPort, virtual_host='/release', credentials=credentials ))     #定义连接池

# 建立rabbitMQ协议的通道
channel = connection.channel()

# 声明消息队列，消息将在这个队列传递，如不存在，则创建； durable指定队列是否持久化
channel.queue_declare(queue=mqQueue, durable=True)

# message不能直接发送给queue，需经exchange到达queue， 使用以空字符串标识的默认的exchange
# 向队列插入数值 routing_key是队列名
channel.basic_publish(exchange='', routing_key=mqQueue, body=mqMessage)  #注意当未定义exchange时，routing_key需和queue的值保持一致
print('send success msg to rabbitmq : ' + mqQueue)
connection.close()   #关闭连接
