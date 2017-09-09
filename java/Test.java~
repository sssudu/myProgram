class Test{
	public static void main(String[] args){
	URL url =new URL("http://www.baidu.com");
	InputStream is = url.openStream();	
	InputStreamReader isr =newInputStreamReader(is,"UTF-8");
	BufferedReader br =newBufferedReader(isr);
String data = br.readLine();
while(data!=null){
System.out.println(data);//输出数据
data = br.readerLine();
}

br.close();
isr.colose();
is.close();
}
}
