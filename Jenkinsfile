pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',url'https://github.com/Yashnani-code/Amazon-wed.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t amazon:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker stop amazon || true
                    docker rm amazon || true
                    docker run -d --name amazon -p 3000:80 amazon:latest
                '''
            }
        }

    }
}
