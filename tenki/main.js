console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready");

	//　Axios

	const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
	const option = {"responseType": "blob"};//オプション
	axios.get(url,option).then(res=>{
		console.log("通信成功");//ちょっと確認

		//データを変換する
		res.data.text().then(str=>{
			// 文字列をJSONに変換する
			const  jObj = JSON.parse(str)
			console.table(jObj); //テーブル形式で確認
			// TODO:データを抜き出す
			// Arreyは配列なので[]でアクセスすること
			console.log(jObj [0].publishingOffice);//気象庁
			console.log(jObj [0].timeSeries[0].areas[0].area.name);
			console.log(jObj [0].timeSeries[0].areas[1].area.name);
			console.log(jObj [0].timeSeries[0].areas[2].area.name);
			console.log(jObj [0].timeSeries[0].areas[3].area.name);
			//TODO　東京地方の天気を取得
			//weatherCodes
			//weathers
			//winds
			console.log(jObj [0].timeSeries[0].areas[0].weatherCodes[0]);
			console.log(jObj [0].timeSeries[0].areas[0].weathers[0]);
			console.log(jObj [0].timeSeries[0].areas[0].winds[0]);

			let text1 = (jObj [0].timeSeries[0].areas[0].area.name);
			let text2 = (jObj [0].timeSeries[0].areas[0].weathers[0]);
			// let text3 = (jObj [0].timeSeries[0].areas[0].winds[0]);
			$("#msg_1").text(text1);
			$("#msg_2").text(text2);
			// $("#msg_3").text(text3);
		});
			
		
	}).catch(err=>{
		console.log("通信失敗");//エラーの時はこっち
	});
});