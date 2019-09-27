using NUnit.Framework;
using System;

namespace CodeRetreat.Tests
{
	[TestFixture ()]
	public class Test
	{
		[Test ()]
		public void SuccesfulTest ()
		{
			Assert.IsTrue (true);
		}

		[Test ()]
		public void FailingTest ()
		{
			Assert.IsTrue (false);
		}
	}
}
