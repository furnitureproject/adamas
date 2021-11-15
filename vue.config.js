// Spring 연결
module.exports = {
  // 개발서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      // 스프링에서 127.0.0.1:8080/ROOT/api 주소여야 작동한다.
      '/ROOT': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost:8080',
        changeOrigin: true,
        logLevel: 'debug',
      },
    },

    // 포트설정
    port: 9090,
  },
  // css: {
  // 	loaderOptions: {
  // 		sass: {
  // 			data: `
  // 				@import "@/assets/reset.scss";
  // 			`
  // 		}
  // 	}
  // },
  // spring boot의 context-path(이거 넣어줘야 빌드하고나서 컨텍스트패스가 붙은 주소로 작동함)
  // 이걸 쓰는건 우리가 application.properties에 context-path를 지정해놓았기때문에 하는것(server.servlet.context-path=/REST)
  // publicPath:'/ROOT'
};
