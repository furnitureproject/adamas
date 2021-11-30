<template>
    <div>
        <h3>qna2</h3>
        <hr/>
        <div class="container" v-for="(qna, idx) in qnas" v-bind:key="idx">
            <input type="radio" name="accordion" :id= "`answer${idx}`">
            <label :for="`answer${idx}`">
                {{qna.qnaTitle}}
                <i class="fas fa-angle-down"></i>
            </label>
            <div>
                <div>
                    <!-- <p>{{qna.qnaContent}}</p> -->
                    <p>Lorem</p>
                    <p>{{qna.qnaRegdateString}}</p>
                </div>
                <div>
                    <!-- <p>{{qna.qnaReply}}</p> -->
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor omnis autem esse possimus rem officiis iure deserunt, nostrum, suscipit facilis eaque, cum minus expedita quidem soluta iusto consectetur animi repellat.
                    Aliquid aspernatur dolore, non architecto, voluptatum nihil delectus harum earum sunt officiis dolorem enim consequuntur quae quos mollitia eligendi eos numquam dolorum! Enim, delectus. Blanditiis aperiam quibusdam incidunt autem veniam.
                    Incidunt animi eveniet harum voluptatem omnis, tempora delectus laudantium reiciendis totam maxime itaque ipsum voluptate odit tempore reprehenderit numquam. Deleniti maiores nihil blanditiis nemo aliquam autem, nisi ad eveniet harum.
                    Blanditiis maxime, cumque dolorum placeat suscipit consequatur amet, alias quibusdam facilis ad quasi ipsa saepe laborum in. Aliquam culpa saepe sapiente, ea, quasi rerum minima omnis necessitatibus nam, libero explicabo.
                    Est culpa eveniet labore suscipit aut non neque tenetur quas magni atque sequi ipsum doloribus facilis aspernatur, vel ad animi reiciendis ut pariatur voluptates voluptatibus sint. Tempora ipsa cumque earum?
                    Eos voluptates est sunt earum. Repellendus consequatur provident inventore vitae eum earum nihil iure blanditiis quibusdam iusto enim reiciendis rerum impedit, quaerat id doloremque corrupti vel perferendis. Ab, recusandae. Tempora.
                    Eos expedita quaerat suscipit, minus culpa neque. Amet dolores cum explicabo tempore dolor dicta non ullam, adipisci at quisquam similique cupiditate sit, aliquid repellendus obcaecati asperiores, ea modi illum ducimus?
                    Odio adipisci enim aspernatur minima similique, consequatur numquam doloribus, fugiat debitis obcaecati aperiam! Aliquid officia aut repudiandae culpa recusandae, libero excepturi ipsam delectus, illum sapiente natus eligendi molestias explicabo deleniti!
                    Maxime eligendi accusamus sequi, eaque quo dolore pariatur nam amet, porro eius consequatur, dicta labore. Sit aspernatur accusamus incidunt nihil cupiditate molestiae minus. Accusantium, quas deleniti doloribus deserunt dicta eius.
                    Amet vitae omnis illo. Porro libero deleniti maiores consectetur nihil expedita alias possimus repellat voluptates cum quia aspernatur impedit earum voluptatem suscipit tenetur, nesciunt repudiandae voluptatum provident temporibus vitae voluptatibus.
                    Quibusdam accusamus quisquam doloribus corrupti corporis ab exercitationem soluta laudantium! Amet impedit, ea facilis earum consequatur qui eos tempore ducimus voluptate asperiores porro est deleniti ex excepturi ratione, illo consequuntur?
                    Velit pariatur aliquam iusto quae nam unde corporis atque, cum ullam deleniti, dolore est laboriosam nesciunt perspiciatis voluptatem rem. Consequatur tempore sequi recusandae ipsam nulla repellat placeat iusto, magnam odit!
                    Ducimus voluptatem, corrupti doloribus nulla, obcaecati maiores sapiente rerum ipsum vero hic accusantium voluptate fuga voluptatibus saepe modi voluptatum? Libero expedita omnis odit earum quia ut temporibus vitae dolorum soluta!
                    Explicabo, ipsa! Animi consequuntur magnam saepe at excepturi numquam! Nesciunt quibusdam autem, reprehenderit consequuntur placeat accusantium libero commodi veniam labore consectetur praesentium adipisci cumque quidem ullam, laudantium unde rerum quos!
                    Minus sapiente soluta tempora fugit id impedit ea dicta vitae, optio autem dolor animi recusandae dolorem mollitia, excepturi officia obcaecati odio deleniti nostrum. Veniam sint libero sapiente amet eius rerum?</p>
                    <p>{{qna.qnaReplyRegdateString}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        async created(){
            this.getQnA();
        },
        data(){
            return{
                qnas : [],
                page : 1 ,
                productcode : 1,
                allpage : 1,
            }
        },
        methods: {
            async getQnA(){
                const headers={"Content-Type":"application/json"};
                const url =`/ROOT/select_qnalist?code=${this.productcode}&page=${this.page}`;
                const response = await axios.get(url,headers);
                console.log(response);
                if(response.data.result === 1){
                    this.qnas=response.data.list;
                    this.allpage = response.data.cnt;
                }
            }
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.container {
    width: 80%;
    /* box-shadow: 0 0 20px #e5e5e5; */
    padding: 0 40px;
}
input[id*="answer"] {
    display: none;
}
input[id*="answer"] + label {
    font-size: 1.5em;
    display: flex;
    line-height: 4em;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid #d5d5d5;
    cursor: pointer;
}
input[id*="answer"] + label i {
    position: relative;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: all .3s;
}
input[id*="answer"] + label + div{
    overflow: hidden;
    height: 0;
    /* display: flex; */
    align-items: center;
    transition: all .3s;
}
input[id*="answer"] + label + div p {
    display: inline-block;
    padding: 20px 0;
}
input[id*="answer"]:checked + label + div{
    height: 150px;
    border-bottom: 2px solid #d5d5d5;
}
input[id*="answer"]:checked + label i{
    transform: rotate(180deg);
}
</style>