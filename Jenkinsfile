pipeline{
    agent any
 
    stages {
        stage ('npm install'){   
           steps{        
               sh 'npm install'         
          }        
        }
        
        // stage ('test'){     
        //  steps{        
        //       sh 'npm test'  
        //   }
        // }
    
        stage ('build'){
            steps{
              sh 'npm run build'
           }
        }
        
        stage ('artifactss to s3'){
            steps{
                withAWS(credentials: 'deploytos3', region: 'ap-southeast-2') {
    // some block
                    sh 'aws s3 ls'
                    sh 'aws s3 sync dist s3://virtualqueuing.net'
                }
            }
                
         }
    }
    post {
        always {
            cleanWs()
        }
    } 
}