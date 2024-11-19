import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Smile, 
  Send, 
  Settings, 
  Users, 
  Search, 
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  X
} from 'lucide-react';

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'other';
  timestamp: Date;
};

type Contact = {
  id: number;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  lastMessage: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hey! Welcome to Nebula Chat! 👋",
    sender: 'other',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 2,
    content: "This is a demo of our chat interface. Feel free to try it out! ✨",
    sender: 'other',
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
  },
];

const contacts: Contact[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    status: 'online',
    lastMessage: "Welcome to Nebula Chat!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    status: 'offline',
    lastMessage: "The new features look great!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    status: 'online',
    lastMessage: "Thanks for the update",
  },
];

export default function ChatInterface({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate reply after 1 second
    setTimeout(() => {
      const reply: Message = {
        id: messages.length + 2,
        content: "Thanks for trying out our demo! 🚀",
        sender: 'other',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a1a] flex">
      {/* Sidebar */}
      <div className="w-80 border-r border-purple-500/20 flex flex-col">
        <div className="p-4 border-b border-purple-500/20">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-[#1a1a2e] text-white rounded-lg pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {contacts.map(contact => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-purple-500/10 transition-colors ${
                selectedContact.id === contact.id ? 'bg-purple-500/20' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a1a] ${
                  contact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold">{contact.name}</h3>
                <p className="text-gray-400 text-sm truncate">{contact.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-purple-500/20">
          <button className="w-full flex items-center justify-center space-x-2 p-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={selectedContact.avatar}
              alt={selectedContact.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-white font-semibold">{selectedContact.name}</h2>
              <p className="text-sm text-gray-400">{selectedContact.status === 'online' ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <Users className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${message.sender === 'user' ? 'bg-purple-500/20' : 'bg-[#1a1a2e]'} rounded-2xl p-4`}>
                <p className="text-white">{message.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/20">
          <div className="flex items-center space-x-3 bg-[#1a1a2e] rounded-lg p-3">
            <button type="button" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button type="button" className="text-gray-400 hover:text-purple-400 transition-colors">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button type="button" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-50"
              disabled={!newMessage.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}