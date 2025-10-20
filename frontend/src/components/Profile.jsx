import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen, Wallet } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import FinanceManagement from './FinanceManagement'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const {user} = useSelector(store=>store.auth);

    return (
        <div>
            <Navbar />
            
            {/* Tab Navigation */}
            <div className='max-w-4xl mx-auto my-5'>
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                    <Button
                        variant={activeTab === 'profile' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('profile')}
                        className="flex-1"
                    >
                        Profile
                    </Button>
                    <Button
                        variant={activeTab === 'finance' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('finance')}
                        className="flex-1"
                    >
                        <Wallet className="h-4 w-4 mr-2" />
                        Finance
                    </Button>
                </div>
            </div>

            {activeTab === 'profile' && (
                <>
                    <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-4'>
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                                </Avatar>
                                <div>
                                    <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                                    <p>{user?.profile?.bio}</p>
                                </div>
                            </div>
                            <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                        </div>
                        <div className='my-5'>
                            <div className='flex items-center gap-3 my-2'>
                                <Mail />
                                <span>{user?.email}</span>
                            </div>
                            <div className='flex items-center gap-3 my-2'>
                                <Contact />
                                <span>{user?.phoneNumber}</span>
                            </div>
                        </div>
                        <div className='my-5'>
                            <h1>Skills</h1>
                            <div className='flex items-center gap-1'>
                                {
                                    user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                                }
                            </div>
                        </div>
                        <div className='grid w-full max-w-sm items-center gap-1.5'>
                            <Label className="text-md font-bold">Resume</Label>
                            {
                                isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                            }
                        </div>
                    </div>
                    <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                        {/* Applied Job Table   */}
                        <AppliedJobTable />
                    </div>
                </>
            )}

            {activeTab === 'finance' && (
                <div className='max-w-4xl mx-auto'>
                    <FinanceManagement />
                </div>
            )}

            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile