const AWS = require('aws-sdk');

const client = new AWS.DynamoDB.DocumentClient();

module.exports.run = async event => {
  const params = {
    TableName: 'contents',
    Item: {
      id: '1asdfasdf21348ajksdfhjkasdf',
      caption: 'Global Creative Production Company That Crafts Amazing Workk',
      sub_caption:
        'We are fastest growing digital agency that with strong business idea and ethics. Check our work with awesome customers.',

      award: 'Award winning creative agency',
      sub_award:
        'We have the best experts to elevate your business to the next level, try is and you will see! The modern everywhere are safe means of accessing accurate information. Prompt information is vital for people who want to keep the pace with a constantly evolving',
      marketing: 'Marketing',
      award_marketing: 'Marketing',
      sub_award_marketing:
        'The modern world is in a continuous movement and people everywhere are looking for quick,.',
      development: 'Development',
      award_development: 'Development',
      sub_award_development:
        'The modern world is in a continuous movement and people everywhere are looking for quick,.',
      web_design: 'Web Design',
      award_web_design: 'Web Design',
      sub_award_web_design:
        'The modern world is in a continuous movement and people everywhere are looking for quick,.',
      seo: 'SEO Optimization',
      award_seo: 'SEO Optimization',
      sub_award_seo:
        'The modern world is in a continuous movement and people everywhere are looking for quick,.',
      process_title: 'Our Process',
      sub_process_title:
        'The modern world is in a continuous movement and people everywhere are looking for quick.',
      process_strategy: 'Set a Good Strategy',
      sub_process_strategy_a:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      sub_process_strategy_b:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      process_make_design: 'Make a nice Design',
      sub_process_make_design_a:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      sub_process_make_design_b:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      process_develop: 'Develop a Poetry Code',
      sub_process_develop_a:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      sub_process_develop_b:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      process_class_support: 'Give first class Support',
      sub_process_class_support_a:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      sub_process_class_support_b:
        'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      generation_marketing: 'The Next Generation of the Marketing',
      sub_generation_marketing:
        'We will take everything you hate about social platforms, crossed it out in red ink and wrote down everything your customers would like to see.',
      business: 'Ultimate Services For Your Business',
      sub_business:
        'Voice & Collaboration Services That Will Make You Fell Like You are in the Same Office.',
      business_web_design: 'Web Design',
      sub_business_web_design:
        'Learn how to generate more leads on your website with hundreds of proven strategies',
      business_development: 'Development',
      sub_business_development:
        'Learn how to generate more leads on your website with hundreds of proven strategies',
      business_marketing: 'Marketing',
      sub_business_marketing:
        'The modern world is in a continuous movement and people everywhere.',
      business_ecommerce: 'Ecommerce',
      sub_business_ecommerce:
        'Learn how to generate more leads on your website with hundreds of proven strategies',
      business_seo: 'SEO Optimization',
      sub_business_seo:
        'The modern world is in a continuous movement and people everywhere.',
      business_branding: 'Branding',
      sub_business_branding:
        'Learn how to generate more leads on your website with hundreds of proven strategies',
      project: 'We completed +120 Project Yearly',
      sub_project:
        'We are fastest growing digital agency that with strong business idea and ethics. Check our info with some awesome numbers.',
      project_award: 'Award',
      project_award_count: '12',
      project_project: 'Projects',
      project_project_count: '123',
      project_happy_clients: 'Happy Clients',
      project_happy_clients_count: '1234',
      project_up_time: 'Up Time',
      project_up_time_count: '99.9',
      feedback: 'What Our Awesome Clients Say About Our Work',
      first_feedback:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Ventage or dorent eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident rum.',
      second_feedback:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Ventage or dorent eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident rum.',
      third_feedback:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Ventage or dorent eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident rum.',
      first_feedback_name: 'Aleen Valzac',
      second_feedback_name: 'Alex Joan',
      third_feedback_name: 'Jack Morison',
      mobile_feedback: 'What Our Awesome Clients Say About Our Work',
      sub_mobile_feedback:
        'BeepB lets you take control of your complete ecommerce warehouse and understand how you’re business is holding up.',
      expert_title: 'Our Expert Peopel',
      sub_expert_title:
        'The modern world is in a continuous movement and people everywhere are looking for quick.',
      first_expert_name: 'Alex Joan',
      first_expert_position: 'Wordpress Developer',
      first_expert_description:
        'He is our Project manager ninja, He make sure the projects be done',
      second_expert_name: 'John Harris',
      second_expert_position: 'PROJECT MANAGER',
      second_expert_description:
        'she is our Project manager ninja, He make sure the projects be done',
      third_expert_name: 'Amine Jazouli',
      third_expert_position: 'DESIGNER',
      third_expert_description:
        'He is our Project manager ninja, He make sure the projects be done',
      fourth_expert_name: 'Aleen Valzac',
      fourth_expert_position: 'CEO',
      fourth_expert_description:
        'He is our Project manager ninja, He make sure the projects be done',
      footer:
        'We create engaging brand assets and trusted content for your site, and then market it to authoritative sites across the web. Clients also get consulting from us. We’ve been trusted since 1993.'
    }
  };

  await client.put(params).promise();

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(params.Item)
  };
};
