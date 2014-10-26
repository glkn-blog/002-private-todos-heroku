var shareAccess = require('share-access');

module.exports = shareAccess;

function isOwner(docId, doc, session) {
    return doc.ownerId === session.userId;
}

shareAccess.allowRead('todos', isOwner);
shareAccess.allowDelete('todos', isOwner);
shareAccess.allowCreate('todos', isOwner);

shareAccess.allowUpdate('todos', function(docId, oldDoc, newDoc, path, session){
    return isOwner(docId, oldDoc, session);
});

