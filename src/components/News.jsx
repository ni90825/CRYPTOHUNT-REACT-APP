import {React,useEffect,useState} from 'react'
import {useGetCryptosNewsQuery} from "../services/newsApi";
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Row,Col,Card,Typography, Avatar,Select,Skeleton} from "antd";
import moment from "moment";
import newsapi from '../services/newsapi1';

const News = ({status,category}) => {
  const [Category,setCategory]=useState(category);
  console.log(Category);
  let count=0;

  useEffect(()=>{
    setdata([]);
    newsappicall();
  },[])

if(status==true){
  count=6;
}
else{
  count=50;
}
const [data,setdata]=useState([]);
  const newsappicall= async () =>{
    const datanews=await newsapi.newscalling(Category,count);
    setdata(datanews.data.news)
    console.log(datanews)
  }

  const {data:cryptocoin}=useGetCryptosQuery(20);
  console.log(cryptocoin?.data?.coins)
  const demo="https://media.istockphoto.com/id/1326770854/photo/cryptocurrency-on-binance-trading-app-bitcoin-btc-with-altcoin-digital-coin-crypto-currency.jpg?s=612x612&w=0&k=20&c=zDTdAkqrP7Er1MM2r25GNrTN7jygE-NzSgsVwWsnLKM="
  // console.log(datanews);
  const {Option} =Select;
  return (
    <Row gutter={[24,24]}>
      {
      (status!==true) ? <Col span={24}>
        <Select  ShowSearch className='select-news' placeholder="Select Cryptocurrency" optionFilterProp='children' onChange={(value)=>{setCategory(value);console.log(value)}} 
       >

        <Option value="Cryptocurrency">Cryptocurrency</Option>
        {cryptocoin?.data?.coins.map((coinsm)=>{
          return(
          <Option value={`${coinsm.name}`}>{`${coinsm.name}`}</Option>
          )
        })
        }

        </Select>
      </Col>: ""
}
   { 
   (data?.length !== 0) ?
   <>
   {data?.map((value)=>
   {
     return(
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className='news-card'>
      <a href={`${value.url}`} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Typography.Title className='news-title' level={5}>
            {
              <span>{(value.title.length>40)?`${value.title.substring(0,40)}....`:`${value.title}`}</span>
            }
            </Typography.Title> 
            <img alt="news" className="imageooff" src={`${value?.image || demo}`}/>
          </div>
          <p className="para" style={{fontsize:"1vw"}}>
            {
              <span>{(value.body.length>100)?`${value.body.substring(0,100)}....`:`${value.body}`}</span>
            }
          </p>
          <br></br>
          <div className="provider-container">
            <div>
              <Typography.Text className='provider-name'>{value.source}</Typography.Text>
            </div>
            <Typography.Text>
              <span>{moment(value.date).startOf("ss").fromNow()}</span>
              </Typography.Text>
          </div>
      </a>
        </Card>
      </Col>
     )
    })
  }
  </> : <><Skeleton active className='skelthon1' /><Skeleton active className='skelthon1' /><Skeleton active className='skelthon1' /></>
  } 
  </Row>
  )
}

export default News