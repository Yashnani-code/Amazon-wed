pipeline {

    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Yashnani-code/Amazon-wed.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t yourdockerhubusername/amazon:latest .'
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push yourdockerhubusername/amazon:latest'
            }
        }

        stage('Deploy to Container') {
            steps {
                sh '''
                    docker stop amazon || true
                    docker rm amazon || true

                    docker pull yourdockerhubusername/amazon:latest

                    docker run -d \
                      --name amazon \
                      -p 3000:80 \
                      yourdockerhubusername/amazon:latest
                '''
            }
        }
    }
}
