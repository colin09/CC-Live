#!/usr/bin/python
# coding=utf-8

import pika   


# amqp://yjp:yjp@RabbitMQ01.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ02.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ03.yjp.com:6000/;
 
mqExchange = 'ex.supplychain.orders.complete'
mqQueue = 'mq.erp.order.SCMJiupiOrderComplete' 


mqQueue = 'mq.erp.order.stockOrderDetail'
mqMessage = '{"id":"test" }'

# amqp://yjp:yjp@RabbitMQ01.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ02.yjp.com:6000/;amqp://yjp:yjp@RabbitMQ03.yjp.com:6000/;
mqUser = 'yjp'
mqPwd = 'yjp'
mqHost = 'RabbitMQ01.yjp.com'
mqPort = 6000
# mq 用户名/密码
credentials = pika.PlainCredentials(mqUser,mqPwd)
# 
connection = pika.BlockingConnection(pika.ConnectionParameters(host=mqHost, port=mqPort, virtual_host='/', credentials=credentials ))     #定义连接池

# 建立rabbitMQ协议的通道
channel = connection.channel()

# 声明消息队列，消息将在这个队列传递，如不存在，则创建； durable指定队列是否持久化
channel.queue_declare(queue=mqQueue, durable=True)

# message不能直接发送给queue，需经exchange到达queue， 使用以空字符串标识的默认的exchange
# 向队列插入数值 routing_key是队列名
channel.basic_publish(exchange='', routing_key=mqQueue, body=mqMessage)  #注意当未定义exchange时，routing_key需和queue的值保持一致
print('send success msg to rabbitmq : ' + mqQueue)
connection.close()   #关闭连接
