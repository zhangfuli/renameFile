function renameFile(fileDirectory,newfileDirectory){
	var fs = require('fs');
	if (fs.existsSync(fileDirectory)) {
	    var files = fs.readdirSync(fileDirectory);             //同步读取文件夹中全部内容，返回字符串数组

	    for (var i = 0; i < files.length; i++) {

	        var filePath = fileDirectory + "/" + files[i];
	        var name = i;										//新的图片名称
	        console.log(name);
	        var fileName = name.toString() + ".jpg";           //图片格式
	        var newFilePath = newfileDirectory + "/" + fileName;

	        fs.rename(filePath, newFilePath, function(err) {
	        	if (err) throw err;
	            console.log(fileName + ' ok~');
	        });
	    }
	} else {
	    console.log(fileDirectory + "  Not Found!");
	}
}
renameFile("e:\\练习\\jpg","e:\\练习\\jpg_2");				//第一个参数是目标文件，第二个是要改近去的文件
