import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemohelloStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const lambda1  = new lambda.Function(this, 'MyLambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_16_X,
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DemohelloQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
