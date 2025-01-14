/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import { Link } from '@backstage/core-components';

/**
 * Email Card action link
 *
 * @private
 */
export const EmailCardAction = ({ email }: { email: string }) => {
  return (
    <IconButton
      component={Link}
      aria-label="Email"
      title={`Email ${email}`}
      to={`mailto:${email}`}
      target="_blank"
    >
      <EmailIcon />
    </IconButton>
  );
};
