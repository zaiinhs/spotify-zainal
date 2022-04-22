import { Avatar, Box, Button, Link, Tag, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { useAppSelector } from '../../store';
import { User } from '../../types/user';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Profile = () => {
  const user: User | null = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Seo
        title="Profile"
        suffixTitle
      />

      <Layout>
        <Box as="main" className="container" my={5}>
          <VStack>
            <Avatar size="2xl" src={user?.images[0]?.url} />
            <Text fontSize="xl">{user?.display_name}</Text>
            <Tag>{user?.followers.total} Followers</Tag>
            <Box style={{
              marginTop: 40,
            }}>
              <Link
                href={user?.external_urls.spotify}
                _hover={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button rightIcon={<FaExternalLinkAlt />}>Spotify Profile</Button>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Layout>
    </>
  );
};

export default Profile;
