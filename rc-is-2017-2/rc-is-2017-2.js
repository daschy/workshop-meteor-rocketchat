/* globals isSetNotNull */
/*
 * emojiParser is a function that will replace emojis
 * @param {Object} message - The message object
 */

Meteor.startup(function () {
    RocketChat.MessageTypes.registerType({
        id: 'rc-is-2017_2_action_link',
        system: true,
        message: 'You clicked opened'
    });
});

RocketChat.callbacks.add('renderMessage', (message) => {
    const currentTime = new Date();

    // let token = `=&=${(Random.id())}=&=`;
    // message.tokens = [];
    // message.tokens.push({
    //     token: token,
    //     text: `<h2>${message.msg + currentTime}</h2>`,
    // });
    message.html = `<h2>${message.msg + currentTime}</h2>`;

    if (Meteor.isServer) {
        RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser('uni2017_action_link', message.rid, '', message.u._id, {
            actionLinks: [
                { icon: 'icon-edit', label: 'Open me left', method_id: 'open_me_left_server_action', params: message },
                { icon: 'icon-cancel', label: 'Open open me right', method_id: 'open_me_right_server_action', params: message }
            ]
        });
    }
    return message;
}, RocketChat.callbacks.priority.LOW, 'rc-is-2017_2');


RocketChat.actionLinks.register('open_me_left_server_action', (message, params) => {
    if (Meteor.isServer) {
        console.log('open me left');
        RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser(
            'rc-is-2017_2_action_link',
            'GENERAL',
            `Thanks, you pressed the button left`,
            Meteor.userId(), {
                actionLinks: [
                    { icon: 'icon-pencil', label: 'Thanks', method_id: 'rc-is-2017_2', params: message },
                ]
            },
        );
    }
});

RocketChat.actionLinks.register('open_me_right_server_action', (message, params) => {
    if (Meteor.isServer) {
        console.log('open me right');
        RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser(
            'rc-is-2017_2_action_link',
            'GENERAL',
            `Thanks, you pressed the button right`,
            Meteor.userId(), {
                actionLinks: [
                    { icon: 'icon-pencil', label: 'Thanks', method_id: 'thanks_action', params: message },
                ]
            },
        );
    }
});

RocketChat.actionLinks.register('thanks_action', (message, params) => {
    console.log('open me right');
    RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser(
        'rc-is-2017_2_action_link',
        'GENERAL',
        `Thanks, you pressed the button right`,
        Meteor.userId(), {
            actionLinks: [
                { icon: 'icon-pencil', label: 'Thanks', method_id: 'rc-is-2017_2', params: message },
            ]
        },
    );
});
