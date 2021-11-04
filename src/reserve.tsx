import {useState} from 'react'
import { Button, Container, Row, Col, Form, FloatingLabel, FormControl } from 'react-bootstrap';
import React from 'react';


const Reserve = () => {

  // const [peopleSum, setPeopleSum] = useState(0)

  // const UpdatePeopleSum = (e:any) => {
  //   console.log(e)
  // }

  // const onSubmit = () => {
  //   const timeSelect = document.getElementById("time-select");
  //   const peoplesSelect = document.getElementsByClassName("people-select");

  //   const nameSelect = document.getElementById("name-select");
  //   const furiganaSelect = document.getElementById("furigana-select");
  //   const prifectureSelect = document.getElementById("prifecture-select");
  //   const telSelect = document.getElementById("tel-select");
  //   const emailSelect = document.getElementById("email-select");

  //   // timeSelect.value

  //   // const element: HTMLInputElement = (HTMLInputElement)document.getElementById(‘hoge');
  //   // const value: string = element.value;

	// 	// const image = document.getElementsByClassName("form-control-file")[0].files[0];

	// 	// const formData = new FormData();
	// 	// formData.append('name', name);
	// 	// formData.append('image', image);

	// 	// if(!name) {alert("名前が入力されていません"); return}
  // }

  // インターフェース
  // const interface IData {
  //   userName: string
  //   mailAddress: string
  // }
  // // 初期データ
  // const initialData: IData = {
  //   userName: '',
  //   mailAddress: '',
  // }

  // interface IData{
  //   time:number;
  //   people:number;
  //   prefecture:number;
  //   name:string;
  //   tel:string;
  //   email:string;
  // }

  // class Data implements IData{
  //   time = 0;
  //   people = 0;
  //   prefecture = 0;
  //   name = "";
  //   tel = "";
  //   email = "";
  // }

  // データ
  const [time, setTime] = useState(0);
  const [people, setPeople] = useState([0,0,0,0,0,0]);
  const [peopleSum, setPeopleSum] = useState(0);
  const [prefecture, setPrefecture] = useState(0);
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");


  // onChange で取得
  const onChangeTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setTime(Number(value));
  }
  const onChangePeople = (event: React.ChangeEvent<HTMLSelectElement>, index : number) => {
    const value = event.target.value;
    let tmp = people;
    tmp[index] = Number(value);
    setPeople(tmp);
    
    // 合計人数を更新
    let sum = 0;
    tmp.forEach(value => sum += value)
    setPeopleSum(sum);
  }
  const onChangePreference = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setPrefecture(Number(value));
  }
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  }
  const onChangeFurigana = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFurigana(value);
  }
  const onChangeTel = (event: React.ChangeEvent<typeof FormControl & HTMLInputElement>) => {
    const value = event.target.value;
    setTel(value);
  }
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  }

  const onSubmit = () => {
    console.log("--------------------")
    console.log(time)
    console.log(people)
    console.log(peopleSum)
    console.log(prefecture)
    console.log(name)
    console.log(furigana)
    console.log(tel)
    console.log(email)
  }

//   const _onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setData({ ...data, email: value });
// }

  return(
    <>
      <Container>
        <Form>
          <Form.Label className="mt-3 mb-2">
            予約情報
          </Form.Label>

          <FloatingLabel label="時間帯" className="mb-2">
            <Form.Select className={ "time-select " + (time === 0 ? "bg-white" : "bg-green")}  onChange={event => onChangeTime(event)} placeholder="time">
              <option key="0" value="0">選択してください</option>
              <option key="1" value="1">10:00~11:00</option>
              <option key="2" value="2">11:30~12:30</option>
              <option key="3" value="3">13:00~14:00</option>
              <option key="4" value="4">14:30~15:30</option>
            </Form.Select>
          </FloatingLabel>

          <Row>
            {
              ["大人","シニア","小学生","〜小学生","〜2歳","0歳"].map((value, index) => 
                <>
                  <FloatingLabel key={index} label={value} as={Col} sm={2} className="mb-2">
                    <Form.Select className={"people-select " + (people[index] === 0 ? "bg-white" : "bg-green")} onChange={event => onChangePeople(event, index)}>
                      {
                        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num, index) =>
                          <option key={index} value={num}>{num}</option>
                        )
                      }
                    </Form.Select>
                  </FloatingLabel>
                </>
              )
            }
          </Row>
          {
            <>
              合計：{ peopleSum }名
            </>
          }
          <br/>

          <Form.Label className="mt-3 mb-2">
            お客様情報
          </Form.Label>

          <FloatingLabel label="お名前" className="mb-2">
            <Form.Control type="text" className={"name-control " + (name === "" ? "bg-white" : "bg-green")} onChange={onChangeName} placeholder="name"/>
          </FloatingLabel>

          <FloatingLabel label="ふりがな" className="mb-2">
            <Form.Control type="text" className={"furigana-control " + (furigana === "" ? "bg-white" : "bg-green")} onChange={onChangeFurigana} placeholder="furigana"/>
          </FloatingLabel>

          <FloatingLabel label="お住まいの都道府県" className="mb-2">
           <Form.Select className={"prefecture-select " + (prefecture === 0 ? "bg-white" : "bg-green")} onChange={event => onChangePreference(event)} placeholder="prefecture">
              <option key="0" value="0">選択してください</option>
              <option key="1" value="1">北海道</option>
              <option key="2" value="2">青森県</option>
              <option key="3" value="3">岩手県</option>
              <option key="4" value="4">宮城県</option>
              <option key="5" value="5">秋田県</option>
              <option key="6" value="6">山形県</option>
              <option key="7" value="7">福島県</option>
              <option key="8" value="8">茨城県</option>
              <option key="9" value="9">栃木県</option>
              <option key="10" value="10">群馬県</option>
              <option key="11" value="11">埼玉県</option>
              <option key="12" value="12">千葉県</option>
              <option key="13" value="13">東京都</option>
              <option key="14" value="14">神奈川県</option>
              <option key="15" value="15">新潟県</option>
              <option key="16" value="16">富山県</option>
              <option key="17" value="17">石川県</option>
              <option key="18" value="18">福井県</option>
              <option key="19" value="19">山梨県</option>
              <option key="20" value="20">長野県</option>
              <option key="21" value="21">岐阜県</option>
              <option key="22" value="22">静岡県</option>
              <option key="23" value="23">愛知県</option>
              <option key="24" value="24">三重県</option>
              <option key="25" value="25">滋賀県</option>
              <option key="26" value="26">京都府</option>
              <option key="27" value="27">大阪府</option>
              <option key="28" value="28">兵庫県</option>
              <option key="29" value="29">奈良県</option>
              <option key="30" value="30">和歌山県</option>
              <option key="31" value="31">鳥取県</option>
              <option key="32" value="32">島根県</option>
              <option key="33" value="33">岡山県</option>
              <option key="34" value="34">広島県</option>
              <option key="35" value="35">山口県</option>
              <option key="36" value="36">徳島県</option>
              <option key="37" value="37">香川県</option>
              <option key="38" value="38">愛媛県</option>
              <option key="39" value="39">高知県</option>
              <option key="40" value="40">福岡県</option>
              <option key="41" value="41">佐賀県</option>
              <option key="42" value="42">長崎県</option>
              <option key="43" value="43">熊本県</option>
              <option key="44" value="44">大分県</option>
              <option key="45" value="45">宮崎県</option>
              <option key="46" value="46">鹿児島県</option>
              <option key="47" value="47">沖縄県</option>
            </Form.Select>
          </FloatingLabel>

          <FloatingLabel label="お電話番号" className="mb-2">
            <Form.Control type="tel" className={"tel-control " + (tel === "" ? "bg-white" : "bg-green")} onChange={onChangeTel} placeholder="tel"/>
          </FloatingLabel>

          <FloatingLabel label="メールアドレス" className="mb-2">
            <Form.Control type="email" className={"email-control " + (email === "" ? "bg-white" : "bg-green")} onChange={onChangeEmail} placeholder="email"/>
          </FloatingLabel>

          <Button variant="primary" size="lg" className="m-2" onClick={onSubmit} disabled={time === 0 || peopleSum === 0 || name === "" || furigana === "" || prefecture === 0 || tel === "" || email === ""}>
            確認画面へ
          </Button><br/>

          <a href="./register" className="m-2">会員登録済みの方はこちら</a>
        </Form>
      </Container>
    </>
  )
}

export default Reserve